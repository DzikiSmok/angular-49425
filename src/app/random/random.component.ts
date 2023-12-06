import {Component, Input} from '@angular/core';
import {RandomService} from "../random.service";

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent {
  randomNumber: number = 0;
  @Input()
  max: number = 10;

  constructor(private randomService: RandomService) {
  }
  ngOnInit() : void {
    this.randomNumber = this.randomService.randomNumber(this.max);
  }

  buttonClick() : void{
    this.randomNumber = this.randomService.randomNumber(this.max);
  }

  checkUpperHalf(): boolean{
    return this.randomNumber >= this.max/2;
  }
}
