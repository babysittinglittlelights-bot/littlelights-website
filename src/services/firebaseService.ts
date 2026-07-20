import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore'

// Get Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'YOUR_API_KEY',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'YOUR_AUTH_DOMAIN',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'YOUR_PROJECT_ID',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'YOUR_STORAGE_BUCKET',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || 'YOUR_MESSAGING_SENDER_ID',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || 'YOUR_APP_ID',
}

// Initialize Firebase only if config is provided
let db: any = null

if (firebaseConfig.projectId !== 'YOUR_PROJECT_ID') {
  try {
    const app = initializeApp(firebaseConfig)
    db = getFirestore(app)
    console.log('✅ Firebase initialized')
  } catch (error) {
    console.error('❌ Firebase initialization error:', error)
  }
}

export const saveBookingToFirebase = async (booking: any) => {
  if (!db) {
    console.warn('⚠️ Firebase not configured. Add credentials to .env.local')
    return null
  }

  try {
    const bookingRef = collection(db, 'bookings')
    const docRef = await addDoc(bookingRef, {
      ...booking,
      createdAt: new Date(booking.createdAt),
      updatedAt: new Date(),
    })
    console.log('✅ Booking saved to Firebase:', docRef.id)
    return docRef.id
  } catch (error) {
    console.error('❌ Error saving booking to Firebase:', error)
    throw error
  }
}

export const getAllBookings = async () => {
  if (!db) {
    console.warn('⚠️ Firebase not configured')
    return []
  }

  try {
    const bookingRef = collection(db, 'bookings')
    const snapshot = await getDocs(bookingRef)
    const bookings = snapshot.docs.map(doc => ({
      firebaseId: doc.id,
      ...doc.data(),
    }))
    console.log('✅ Bookings fetched from Firebase:', bookings.length)
    return bookings
  } catch (error) {
    console.error('❌ Error fetching bookings:', error)
    throw error
  }
}

export const updateBookingInFirebase = async (firebaseId: string, updates: any) => {
  if (!db) {
    console.warn('⚠️ Firebase not configured')
    return
  }

  try {
    const bookingRef = doc(db, 'bookings', firebaseId)
    await updateDoc(bookingRef, {
      ...updates,
      updatedAt: new Date(),
    })
    console.log('✅ Booking updated in Firebase:', firebaseId)
  } catch (error) {
    console.error('❌ Error updating booking:', error)
    throw error
  }
}

export const deleteBookingFromFirebase = async (firebaseId: string) => {
  if (!db) {
    console.warn('⚠️ Firebase not configured')
    return
  }

  try {
    const bookingRef = doc(db, 'bookings', firebaseId)
    await deleteDoc(bookingRef)
    console.log('✅ Booking deleted from Firebase:', firebaseId)
  } catch (error) {
    console.error('❌ Error deleting booking:', error)
    throw error
  }
}
