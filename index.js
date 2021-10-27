import { Storage } from '@capacitor/storage'

export class StorageWrapper {
  static async getItem (key) {
    const { value } = await Storage.get({
      key
    })
    return value
  }

  static setItem (key, value) {
    return Storage.set({
      key,
      value
    })
  }

  static removeItem (key) {
    return Storage.remove({
      key
    })
  }
}
