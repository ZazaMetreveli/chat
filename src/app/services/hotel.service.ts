import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})


export class HotelService {

  constructor(private http: HttpClient) {}

  addComment(com: any) {
    this.http.post('https://test0023-19620-default-rtdb.europe-west1.firebasedatabase.app/comment.json', com)
      .subscribe(res => {
        console.log(res)
      })
  }

  addAnswer(newCom: any) {
    this.http.post('https://test0023-19620-default-rtdb.europe-west1.firebasedatabase.app/answer.json', newCom)
    .subscribe(res => {
      // console.log(res)
      this.getAnswer()
    })
  }

  getAnswer() {
    this.http.get('https://test0023-19620-default-rtdb.europe-west1.firebasedatabase.app/answer.json')
    .subscribe((res: any) => {

      for(let key in res) {
        let item = res[key]
        alert(item.com)
      }
    })
  }

}
