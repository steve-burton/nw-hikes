import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MemberService]
})
export class HomeComponent implements OnInit {

  constructor(private memberService: MemberService) { }
    callMemberService(){
      this.memberService.memberOutput();
      console.log("member")
    }
  ngOnInit() {
  }

}
