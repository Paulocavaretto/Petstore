import { Component,  Input,  OnInit } from '@angular/core';
import { ParametersService } from 'src/app/services/parameters.service';
import { Parameters } from 'src/app/interfaces/parameters';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() parameters!: Parameters;

  constructor(
    private parametersService: ParametersService
    ) { }

  ngOnInit(): void{
    this.getParameters();
  }

  getParameters(): void{
    this.parametersService.getParameters()
    .subscribe(parameters => this.parameters = parameters)
    }
}
