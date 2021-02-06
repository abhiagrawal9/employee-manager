import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private db: AngularFirestore) {}

  ngOnInit(): void {
    this.db
      .collection('test')
      .valueChanges()
      .subscribe((data) => {
        console.log(data);
      });
  }
}
