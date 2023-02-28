import Typography from '@mui/material/Typography';
import * as React from 'react';

const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99',
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45',
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51',
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function ComplaintSubmissionSubform3() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Subject
      </Typography>
      <Typography variant="body1" gutterBottom>kisu ekta subject</Typography>
      <Typography variant="h6" gutterBottom>
        Details
      </Typography>
      <Typography variant="body1" gutterBottom>sakib bhai amare rag dise ;-;</Typography>
      <Typography variant="h6" gutterBottom>
        Location
      </Typography>
      <Typography variant="body1" gutterBottom>Sher e Bangla Hall</Typography>
      
    </React.Fragment>
  );
}