import { HttpClient, HttpParams } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from '@ngrx/store';
import { Fitment } from "./fitment.model";
import {AppState} from "../app.state";
import * as FitmentActions from "./store/fitment.action";

@Component({
  selector: 'app-tire-fitment',
  templateUrl: './tire-fitment.component.html',
  styleUrls: ['./tire-fitment.component.css']
})
export class TireFitmentComponent implements OnInit {
    fitments: Observable<Fitment>;
    buttonValue:string="Find Tires";
    buttonCloseValue:string="X";
    open:boolean=true;
    years=[];
    makes=[];
    models=[];
    trims=[];
    // import the store into the constructor
    constructor(private http:HttpClient,private store:Store<AppState>) {
      this.fitments = store.select('fitment');
    }
  
    ngOnInit() {
      this.fitments.subscribe(item=>{
       if(item.allSelected){
        console.log(item)
       }
      });
    }
  
    findTier(){
   
      this.open=!this.open;
      if(this.open){
        this.years=this.makes=this.models=this.trims=[];
        this.store.dispatch(new FitmentActions.ResetYear('reset') )
      }
      else{
        this.http.get('https://6080be3273292b0017cdbf2a.mockapi.io/years').subscribe(result=>{
        this.store.dispatch(new FitmentActions.LoadYear(result.year) )
        
        });
      }
    }
    yearChange(selectedYear:any){
      this.makes=this.models=this.trims=[];
      this.store.dispatch(new FitmentActions.SetYear(selectedYear) );
      this.http.get('https://6080be3273292b0017cdbf2a.mockapi.io/makes',{params:new HttpParams().set('year',selectedYear)}).subscribe(result=>{
        this.makes=result.make;
        });
    }
  
    makeChange(selectedMake:string){
      this.models=this.trims=[];
      this.store.dispatch(new FitmentActions.SetMake(selectedMake) );
      this.http.get('https://6080be3273292b0017cdbf2a.mockapi.io/models',{params:new HttpParams().set('make',selectedMake)}).subscribe(result=>{
        this.models=result.model;
        });
    }
  
    modelChange(selectedModel:string){
      this.trims=[];
      this.store.dispatch(new FitmentActions.SetModel(selectedModel) );
      this.http.get('https://6080be3273292b0017cdbf2a.mockapi.io/trim',{params:new HttpParams().set('model',selectedModel)}).subscribe(result=>{
        this.trims=result.trim;
        });
    }

    trimChange(selectedTrim:string){
      if(selectedTrim!='0'){
      this.store.dispatch(new FitmentActions.SetTrim(selectedTrim) );}
    }
  

  
    // Make with year (2021)
    // https://6080be3273292b0017cdbf2a.mockapi.io/makes
  
    // Model with year and make (Acura)
    // https://6080be3273292b0017cdbf2a.mockapi.io/models
  
    // Trim with year, make, model (RDX)
    // https://6080be3273292b0017cdbf2a.mockapi.io/trim
  }
