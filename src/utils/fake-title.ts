import { LoremIpsum } from "lorem-ipsum"

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
})

export function createFakeTitle(numWords: number = 3) {
  return lorem.generateWords(numWords)
}
