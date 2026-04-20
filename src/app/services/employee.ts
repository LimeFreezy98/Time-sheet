import { inject, Injectable, EnvironmentInjector, runInInjectionContext } from '@angular/core';
import { Employee } from '../interfaces/employee';
import { Observable, defer, from, map, of } from 'rxjs';
// AngularFire Firestore APIs (avoid mixing with raw Web SDK)
import { Firestore, collection, addDoc, query, where, collectionData, CollectionReference, doc, setDoc, deleteDoc} from '@angular/fire/firestore';

/**
 * Service for handling all Employee data interactions with Cloud Firestore.
 */


@Injectable({
  providedIn: 'root', // Makes the service available everywhere
})



export class EmployeeService {
  private envInjector: EnvironmentInjector = inject(EnvironmentInjector);
  private firestore: Firestore = inject(Firestore);

  
  constructor() {}

  /**
   * Saves employee work hours to the 'employee-hours' collection.
   * Uses addDoc() which automatically assigns a unique ID.
   * @param employee The Employee object to save.
   * @returns A Promise resolving when the save operation is complete.
   */
  async saveEmployeeHours(employee: Employee): Promise<void> {
    return runInInjectionContext(this.envInjector, async () => {
      const collectionRef = collection(this.firestore, 'employee-hours');
      await addDoc(collectionRef, employee);
    // });
  });
}

  getEmployeeHoursByDepartment(departmentId: string): Observable<Employee[]> {
    if (!departmentId) {
      return of([] as Employee[]);
    }
    const colRef = collection(this.firestore, 'employee-hours');
    const q = query(colRef, where('departmentId', '==', departmentId));
    return collectionData(q, { idField: 'id' }) as Observable<Employee[]>;
  }


  async updateEmployeeHours(employee: Employee): Promise<void> {

    const employeeDocRef = doc(this.firestore, 'employee-hours', employee.id!);

    return await setDoc(employeeDocRef, employee);
  }


  async deleteEmployeeHours(employee: Employee): Promise<void> {

    const docRef = doc(this.firestore, 'employee-hours', employee.id!);

    return deleteDoc(docRef)
  }

}
