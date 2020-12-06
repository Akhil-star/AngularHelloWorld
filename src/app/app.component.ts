import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl = "";
  url ="";
  userName: string = "";
  nameError: string = "";

  ngOnInit(): void {
    this.title = "Hello from Capgemini";
    this.imgUrl = "../assets/logo.png";
    this.url="https://www.capgemini.com/"
  }

  onClick($event){
    console.log("Save the button is clicked!",$event);
    window.open(this.url,"_blank");
  }

  onInput($event){
    console.log("Change Event Occured ",$event);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError = "";
      return;
    }
    this.nameError = "Name is incorrect";
  }
}
