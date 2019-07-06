import Index from '@/components/Index'
import AddSmoothie from '@/components/AddSmoothie'
import EditSmoothie from '@/components/EditSmoothie'

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
  },
  {
    path: '/edit-smoothie/:smoothie_slug',
    name: 'EditSmoothie',
    component: EditSmoothie
  }
];
export default routes