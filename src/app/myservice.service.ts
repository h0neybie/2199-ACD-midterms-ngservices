import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  showTodayDate(){ 
    let ndate = new Date();
  return ndate;
  } 
  serviceproperty = 'My Service Component';
  abbysproperty = 'Here are my Takeaways'
  abbyref = 'In this lesson, I learned how interpolation works and how we can easily access data that we wish to share across components. By using the services, we are able to access methods and properties from one component to another for the entire project. This is actually really efficient since we are only to call the component to be able to access them.'
}
