import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore'

// Firebase configuration - REPLACE WITH YOUR CONFIG
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
}

// Initialize Firebase only if config is provided
let db: any = null

if (firebaseConfig.projectId !== 'YOUR_PROJECT_ID') {
  const app = initializeApp(firebaseConfig)
  db = getFirestore(app)
}

export const saveBookingToFirebase = async (booking: any) => {
  if (!db) {
    console.warn('Firebase not configured. Please add your Firebase credentials.')
    return
  }

  try {
    const bookingRef = collection(db, 'bookings')
    const docRef = await addDoc(bookingRef, {
      ...booking,
      createdAt: new Date(booking.createdAt),
      updatedAt: new Date(),
    })
    console.log('Booking saved with ID:', docRef.id)
    return docRef.id
  } catch (error) {
    console.error('Error saving booking to Firebase:', error)
    throw error
  }
}

export const getAllBookings = async () => {
  if (!db) {
    console.warn('Firebase not configured')
    return []
  }

  try {
    const bookingRef = collection(db, 'bookings')
    const snapshot = await getDocs(bookingRef)
    const bookings = snapshot.docs.map(doc => ({
      firebaseId: doc.id,
      ...doc.data(),
    }))
    return bookings
  } catch (error) {
    console.error('Error fetching bookings:', error)
    throw error
  }
}

export const updateBookingInFirebase = async (firebaseId: string, updates: any) => {
  if (!db) {
    console.warn('Firebase not configured')
    return
  }

  try {
    const bookingRef = doc(db, 'bookings', firebaseId)
    await updateDoc(bookingRef, {
      ...updates,
      updatedAt: new Date(),
    })
    console.log('Booking updated:', firebaseId)
  } catch (error) {
    console.error('Error updating booking:', error)
    throw error
  }
}

export const deleteBookingFromFirebase = async (firebaseId: string) => {
  if (!db) {
    console.warn('Firebase not configured')
    return
  }

  try {
    const bookingRef = doc(db, 'bookings', firebaseId)
    await deleteDoc(bookingRef)
    console.log('Booking deleted:', firebaseId)
  } catch (error) {
    console.error('Error deleting booking:', error)
    throw error
  }
}
