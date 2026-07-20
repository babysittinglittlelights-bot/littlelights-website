import emailjs from '@emailjs/browser'

// Get credentials from environment variables
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_littlelights'
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_booking'
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key_here'

// Initialize EmailJS if keys are provided
if (PUBLIC_KEY !== 'your_public_key_here') {
  try {
    emailjs.init(PUBLIC_KEY)
    console.log('✅ EmailJS initialized')
  } catch (error) {
    console.error('❌ EmailJS initialization error:', error)
  }
}

export const sendBookingEmail = async (booking: any) => {
  if (PUBLIC_KEY === 'your_public_key_here') {
    console.warn('⚠️ EmailJS not configured. Add credentials to .env.local')
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
      allergies: booking.allergies || 'None',
      medication: booking.medication || 'None',
      special_requirements: booking.specialRequirements || 'None',
      additional_notes: booking.additionalNotes || 'None',
    }

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    )

    console.log('✅ Booking email sent:', response.status)
    return response
  } catch (error) {
    console.error('❌ Error sending booking email:', error)
    throw error
  }
}

// Send confirmation email to parent
export const sendConfirmationEmail = async (booking: any) => {
  if (PUBLIC_KEY === 'your_public_key_here') {
    console.warn('⚠️ EmailJS not configured')
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

    console.log('✅ Confirmation email sent:', response.status)
    return response
  } catch (error) {
    console.error('❌ Error sending confirmation email:', error)
    throw error
  }
}
