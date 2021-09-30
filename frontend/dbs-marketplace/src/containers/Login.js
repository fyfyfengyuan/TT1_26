import React from 'react'
import { connect } from 'prop-types'
import { render } from 'react-dom'
import PropTypes from 'prop-types'


const Login =()=>{

    return(
        <Form onSubmit={this.onSubmit}>
            <FormGroup>
                <Label for="username">Username</Label>
                <Input
                    type="username"
                    name="username"
                    id="username"
                    placeholder="Username"
                    className="mb-3"
                    onChange={this.onChange}
                />
                <Label for="password">Password</Label>
                <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="mb-3"
                    onChange={this.onChange}
                />
                <Button
                    color="dark"
                    style={{marginTop: '2rem'}}
                    block
                >Login</Button>
            </FormGroup>
        </Form>
    );
};

export default login