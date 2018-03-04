import React, { Component } from 'react';
import { Form, InputNumber, Button } from 'antd';
const FormItem = Form.Item;

class Fibonacci extends Component {
	constructor(props) {
		super(props);

	    this.state = {
	      fiboResult: [],
	    }
	}

	hasErrors = (fieldsError) => {
		return Object.keys(fieldsError).some(field => fieldsError[field]);
	}

	calcFibo = (val) => {
		let results = [0];
		let a = 1, b = 0, c = 0;
		for (let i = 0; i < val-1; i++) {
			c = a;
			a = a + b;
			b = c;

			results.push(b);
		}

		return results;
	}

	handleSubmitFibo = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log(this.calcFibo(values.FiboVal));
				this.setState({ fiboResult: this.calcFibo(values.FiboVal) });
			}
		});
	}

	render = () => {
		const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
		const fiboError = isFieldTouched('FiboVal') && getFieldError('FiboVal');

		const { fiboResult } = this.state;

		return (
			<div>
	    		<Form layout="inline" onSubmit={this.handleSubmitFibo}>
			        <FormItem
			          validateStatus={fiboError ? 'error' : ''}
			          help={fiboError || ''}
			        >
			          {getFieldDecorator('FiboVal', {
			            rules: [{ required: true, message: 'Please input value to compute!' }],
			          })(
			            <InputNumber min={1} max={50} style={{ width: 200 }} />
			          )}
			        </FormItem>	

			        <FormItem>
						<Button
						type="primary"
						htmlType="submit"
						disabled={this.hasErrors(getFieldsError())}
						>
							Submit
						</Button>
					</FormItem>
			    </Form>

			    {
			    	(fiboResult.length > 0) ?
			    		<div><b>Result :</b> {fiboResult.join(", ")}</div> : ""
			    }
			</div>
		);
	}
};

const WrappedHorizontalForm = Form.create()(Fibonacci);

export default WrappedHorizontalForm;
