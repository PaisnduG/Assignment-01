import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Card, Image } from 'react-bootstrap'
import loginImage from './login.png'
import './login.css'

const LoginScreen = () => {
	return (
		<div className='loginScreen'>
			<Card className='loginCard'>
				<Row>
					<Col md={6}>
						<Image className='loginImage' src={loginImage} />
					</Col>

					<Col>
						<div>
							<h1>Login</h1>

							<Form>
								<Form.Group controlId='email'>
									<Form.Label className='loginLable'>Email Address:</Form.Label>
									<Form.Control
										className='loginInput'
										type='email'
										placeholder='Enter email'
									></Form.Control>
								</Form.Group>

								<Form.Group controlId='password'>
									<Form.Label className='loginLable'>Password:</Form.Label>
									<Form.Control
										className='loginInput'
										type='password'
										placeholder='Enter password'
									></Form.Control>
								</Form.Group>
								<Link to='/home'>
									<Button
										className=' loginButton'
										type='submit'
										variant='primary'
									>
										Login
									</Button>
								</Link>
							</Form>

							<Row>
								<Col>
									<Link to='/forgotpassword'>Forgotten password?</Link>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>
			</Card>
		</div>
	)
}

export default LoginScreen
