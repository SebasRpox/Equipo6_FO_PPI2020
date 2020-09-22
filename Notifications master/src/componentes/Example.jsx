import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
 
class Example extends React.Component {
  
  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'UpdateBus':
          NotificationManager.info('El bus 140 ha partido de su destino');
          break;
        case 'success':
          NotificationManager.success('Se han actualizado correctamente los datos del bus', 'Actualizacion Datos del bus');
          break;
        case 'warning':
          NotificationManager.warning('La bateria #2 tiene poca energia', 'Poca bateria', 3000);
          break;
        case 'error':
          NotificationManager.error('Error', 'El bus 140 no se encuentra en linea', 5000, () => {
            
          });
          break;
          default:
              NotificationManager.error("404 not found", 'Click me!', 5000, () => {
                alert('callback');
              });
      }
    };
  };
 
  render() {
    return (
      <div>
        <button className='btn btn-info'
          onClick={this.createNotification('UpdateBus')}>Partida Bus
        </button>
        <hr/>
        <button className='btn btn-success'
          onClick={this.createNotification('success')}>Actualizacion Bus
        </button>
        <hr/>
        <button className='btn btn-warning'
          onClick={this.createNotification('warning')}>Poca Bateria
        </button>
        <hr/>
        <button className='btn btn-danger'
          onClick={this.createNotification('error')}>Bus fuera de linea
        </button>
 
        <NotificationContainer/>
      </div>
    );
  }
}
 
export default Example;