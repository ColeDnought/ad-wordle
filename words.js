const wordQueue = [
  'porch', 'homes', 'hiker', 'birds', 'sleep', 'italy', 'happy'
]

var queueIndex = 0

function getNextQueuedWord () {
  if (!Array.isArray(wordQueue) || wordQueue.length === 0) {
    console.error('Word queue is empty or not defined.')
    return undefined
  }
  const word = wordQueue[queueIndex % wordQueue.length]
  queueIndex += 1
  return word
}

function resetWordQueue (index = 0) {
  queueIndex = index
}

function isLastWordInQueue () {
  return queueIndex >= wordQueue.length
}

function randomInteger (min = 0, max = 10) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function wordIndexToCode (index, arrayLength) {
    const multiplier = randomInteger(150, 350)
    const xor = multiplier * 1e3 + multiplier
    if (arrayLength) {
      index += randomInteger(1, 13) * arrayLength
    }
    return String(multiplier) + String((index * multiplier) ^ xor)
  }