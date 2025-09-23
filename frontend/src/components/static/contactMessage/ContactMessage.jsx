
import location from './Location'
import messageForm from './MessageForm'

const ContactMessage = () => {
  return (
    <>
    <div className="row message-container">
      <div className="col-md-4">
        <location/>
      </div>
      <div className="col-md-8">
    <messageForm/>
      </div>
    </div>
    </>
  )
}

export default ContactMessage