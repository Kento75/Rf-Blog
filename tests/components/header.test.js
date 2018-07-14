import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../src/components/header';

test('should render Header correctly', () => {
	const wrapper = shallow(<Header startLogout={() => { }} />);
	expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
	const startLogout = jest.fn();
	const history = { push: jest.fn() };
	const wrapper = shallow(<Header startLogout={startLogout} isAuthenticated={true} history={history}/>);
	wrapper.find('button').simulate('click');
	expect(startLogout).toHaveBeenCalled();
});
