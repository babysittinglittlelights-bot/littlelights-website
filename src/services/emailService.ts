import emailjs from '@emailjs/browser'

// Initialize EmailJS (replace with your service ID)
const SERVICE_ID = 'service_littlelights' // Get from EmailJS dashboard
const TEMPLATE_ID = 'template_booking' // Get from EmailJS dashboard
const PUBLIC_KEY = 'your_public_key_here' // Get from EmailJS dashboard

// Initialize if keys are provided
if (PUBLIC_KEY !== 'your_public_key_here') {
  emailjs.init(PUBLIC_KEY)
}

export const sendBookingEmail = async (booking: any) => {
  if (PUBLIC_KEY === 'your_public_key_here') {
    console.warn('EmailJS not configured. Please add your EmailJS credentials.')
    return
  }

  try {
    const templateParams = {
      to_email: 'babysittinglittlelights@gmail.com',
      from_email: booking.email,
      parent_name: booking.parentName,
      phone: booking.phone,
      children_names: booking.childrenNames,
      children_ages: booking.childrenAges,
      number_of_children: booking.numberOfChildren,
      booking_date: booking.date,
      start_time: booking.startTime,
      end_time: booking.endTime,
      address: booking.address,
      emergency_contact: booking.emergencyContact,
      allergies: booking.allergies,
      medication: booking.medication,
      special_requirements: booking.specialRequirements,
      additional_notes: booking.additionalNotes,
    }

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    )

    console.log('Email sent successfully:', response)
    return response
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}

// Send confirmation email to parent
export const sendConfirmationEmail = async (booking: any) => {
  if (PUBLIC_KEY === 'your_public_key_here') {
    console.warn('EmailJS not configured')
    return
  }

  try {
    const templateParams = {
      to_email: booking.email,
      parent_name: booking.parentName,
      booking_date: booking.date,
      start_time: booking.startTime,
      end_time: booking.endTime,
    }

    const response = await emailjs.send(
      SERVICE_ID,
      'template_confirmation',
      templateParams
    )

    console.log('Confirmation email sent:', response)
    return response
  } catch (error) {
    console.error('Error sending confirmation email:', error)
    throw error
  }
}
