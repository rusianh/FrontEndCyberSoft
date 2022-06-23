import React, { Component } from 'react'
import Content from './Content'
import HeaderDemo from './HeaderDemo'
import Navigation from './Navigation'

export default class Home extends Component {
  render() {
    return (
      <div className='container-fluid '>
           <div className="row">
                <div className="col-md-12">
                    <HeaderDemo/>
                </div>
           </div>
           <div className="row">
                <div className="col-md-4">
                    <Navigation/>
                </div>
                <div className="col-md-8">
                    <Content/>
                </div>
           </div>
      </div>
    )
  }
}
