import Index from '@/components/Index'
import AddSmoothie from '@/components/AddSmoothie'
const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index 
  },
  {
    path: '/add-smoothie',
    name: 'AddSmoothie',
    component: AddSmoothie
  }
];
export default routes