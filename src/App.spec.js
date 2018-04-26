import React from 'react'
import App from './App';
import News from './../Components/News';


describe('App Component', () => {
   it('checks that the News component is being rendered once', ()=>{
     const wrapper = shallow(<App/>);
     expect(wrapper.find(News)).to.have.length(1);
   });
});
