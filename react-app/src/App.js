import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'

const App = () => {
	return (
		<Router>
			<main className='py-3'>
				<Container>
					<Routes>
						<Route path='/' element={<LoginScreen />} exact />
						<Route path='/home' element={<HomeScreen />} />
					</Routes>
				</Container>
			</main>
		</Router>
	)
}

export default App
