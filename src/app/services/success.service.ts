import { Injectable } from '@angular/core';
import { InscriptionSuccess } from '../types/inscriptionSuccess.interface';

@Injectable({
  providedIn: 'root',
})
export class SuccessService {
  private inscriptionData: InscriptionSuccess | null = null;

  public setInscriptionData(data: InscriptionSuccess) {
    this.inscriptionData = data;
  }

  public getInscriptionData(): InscriptionSuccess | null {
    const data = this.inscriptionData;
    this.inscriptionData = null; // Reset après récupération
    return data;
  }
}
