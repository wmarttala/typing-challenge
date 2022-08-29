import { Component, OnInit } from '@angular/core'
import { faker } from '@faker-js/faker'

const lorem = faker.lorem

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  randomText = lorem.sentence()
  enteredText = ''

  constructor () {}

  ngOnInit (): void {}

  onInput (event: Event) {
    if (event.target) {
      const target = event.target as HTMLTextAreaElement
      this.enteredText = target.value
    }
  }

  compare (randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending'
    }
    return randomLetter === enteredLetter ? 'correct' : 'incorrect'
  }
}
