const Notification = props => {
  const {className, paraText} = props
  return <p className={`${className}`}>{paraText}</p>
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <div className='content-container'>
      <h1 className='container-heading'>Notifications</h1>
      <div className='information-message-container'>
        <img
          className='img-icon'
          src='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
        />
        <Notification
          paraText='Information Message'
          className='information-message'
        />
      </div>
      <div className='success-message-container'>
        <img
          className='img-icon'
          src='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
        />
        <Notification paraText='Success Message' className='success-message' />
      </div>
      <div className='warning-message-container'>
        <img
          className='img-icon'
          src='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
        />
        <Notification paraText='Warning Message' className='warning-message' />
      </div>
      <div className='error-message-container'>
        <img
          className='img-icon'
          src='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
        />
        <Notification paraText='Error Message' className='error-message' />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
