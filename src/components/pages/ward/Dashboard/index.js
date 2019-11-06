import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import WardWrapper from '../WardWrapper';
import ActiveCard from '../../../common/ActiveCard';
import  { ReactComponent as Infusion} from '../../../../icons/infusion.svg'
import  { ReactComponent as Nurse} from '../../../../icons/active-nurse.svg'
import  { ReactComponent as Device} from '../../../../icons/active-nurse.svg'
import './dashboard.scss'


const deviceData = [
  {tagName: 'B4', timeLeft: '00:13:20'}, 
  {tagName: 'B17', timeLeft: '01:40:20'}, 
]

const activeNurses = [
  {nurseDetails: { name: 'Abraham Janet'}, assignedPatient: 'Frank Joseph', freeTime: '12:23pm'},
  {nurseDetails: { name: 'Alison Markson'}, assignedPatient: '----', freeTime: 'currently'},
  {nurseDetails: { name: 'Basirat Yakub'}, assignedPatient: 'Terry Blaqs', freeTime: '12:03pm'},
]

class Dashboard extends Component {
  render(){
    return (
      <WardWrapper>
        <div className="container ward-dashboard">
          <h1 className="page-title">Dashboard</h1>
          <div className="page-content">
            <section className="summary">
              <h3>Summary</h3>
              <div className="space-between operations-summary">
                <div className="operation-status">
                  <div>
                    <p className="status-notification"><span>Urgent</span> <i className="fas fa-bell"></i></p>
                    <div className="circle">
                      <h4>1</h4>
                    </div>
                  </div>
                  
                  <div></div>
                </div>
                <div className="actives">
                  <ActiveCard count="6" Icon={Infusion} label="Active Infusion"/>
                  <ActiveCard count="4" Icon={Nurse} label="Active Nurses"/>
                </div>
              </div>
              <div className="device-summary">
                <div className="device-summary-header">
                  <div className="space-between-centered">
                     <h4 className="device-count">02</h4>
                     <Device width="20px"/>
                  </div>
                 
                  <div className="space-between">
                    <p>Devices in use</p>
                    <p><span>45</span> idle</p>
                  </div>
                </div>
                <div className="device-summary-content">
                  <table className="app-table">
                    <thead>
                      <tr>
                        <th>Tag Name</th>
                        <th>Time Left</th>
                      </tr>
                    </thead>
                    <tbody>
                      {deviceData.map(device => (
                        <tr key={device.tagName}>
                          <td>{device.tagName}</td>
                          <td className="numbers">{device.timeLeft}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p>
                    <Link className="button" to="#">See All</Link>
                  </p>
                </div>
              </div>
            </section>
            <section className="dashboard-details">
              <div className="active-infusion">
                <div className="space-between-centered">
                  <h3>Active Infusion</h3>
                  <Link to="#" className="button">See all</Link>
                </div>
                <table className="app-table">
                  <thead>
                      <tr>
                        <th>Volume</th>
                        <th>Countdown</th>
                        <th>Flow Rate</th>
                        <th>Nurse</th>
                        <th>Patient/Case</th>
                      </tr>
                  </thead>
                  <tbody>
                    <tr className="operations-table-row">
                        <td><progress id="file" max="100" value="70"> 70% </progress></td>
                        <td>hello</td>
                        <td>hi</td>
                        <td>this</td>
                        <td>that</td>
                    </tr>

                     <tr className="operations-table-row">
                        <td><progress id="file" max="100" value="70"> 70% </progress></td>
                        <td>hello</td>
                        <td>hi</td>
                        <td>this</td>
                        <td>that</td>
                    </tr>

                     <tr className="operations-table-row">
                        <td><progress id="file" max="100" value="70"> 70% </progress></td>
                        <td>hello</td>
                        <td>hi</td>
                        <td>this</td>
                        <td>that</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="active-nurses">
                <div className="space-between-centered">
                  <h3>Active Nurses</h3>
                  <Link to="#" className="button">See all</Link>
                </div>
                <div className="active-nurses-card">
                  {activeNurses.map(activeNurse=> (
                    <div className="space-between-centered active-nurse-record">
                      <p>
                        <img alt="" className="" src="/assets/img/photos/lady.jpg" />
                        {activeNurse.nurseDetails.name}
                      </p>
                      <p>{activeNurse.assignedPatient}</p>
                      <p>{activeNurse.freeTime}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </WardWrapper>
      )
  }
}

export default Dashboard;