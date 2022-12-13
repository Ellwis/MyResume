import { useEffect } from 'react';
import { DataTable } from '../src/TableData';

export default function App(){
  useEffect(()=> console.log('mmm'))
  return(
      <div>
        <DataTable />
      </div>
      )
}