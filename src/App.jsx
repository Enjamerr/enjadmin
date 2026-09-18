import { 
    Outlet,
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import './App.css'
import SideMenu from './modules/sidemenu/SideMenu'
import DashBoard from './modules/dashboard/Dashboard'
import Apartments from './modules/apartments/Apartments'
import Wallet from './modules/wallet/Wallet'
import Payments from './modules/payments/Payments'
import Expenses from './modules/expenses/Expenses'
import Reports from './modules/reports/Reports'
import Comunications from './modules/comunications/Comunications'


function Layout(){
    return (
        <>
            <nav className="nav">
                <SideMenu title="Altos del Parque" />
            </nav>
            <main className="main">
                <Outlet />
            </main>
        </>
    )
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<>Home</>} />
                    <Route path="dashboard" element={<DashBoard />} />
                    <Route path="apartments" element={<Apartments />} />
                    <Route path="payments" element={<Payments />} />
                    <Route path="wallet" element={<Wallet />} />
                    <Route path="expenses" element={<Expenses />} />
                    <Route path="reports" element={<Reports />} />
                    <Route path="communications" element={<Comunications />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
