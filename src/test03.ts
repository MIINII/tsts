{
  interface LocalStorageAPI<T> {
      [key: string]: T; // T가 벨류다 ㅋ
  }

  abstract class AbLocalStorage<T> {
      public storage: LocalStorageAPI<T> = {};

      setItem(key: string, value: T) {
          this.storage[key] = value;
      }

      getItem(key: string): T {
          return this.storage[key];
      }

      clearItem(key: string) {
          delete this.storage[key];
      }

      clear() {
          this.storage = {};
      }
  }

  class LocalStorage<T> extends AbLocalStorage<T> {
      public storage: { [key: string]: T } = {};

      setItem(key: string, value: T) {
          this.storage[key] = value;
          super.setItem(key, value);
      }

      getItem(key: string): T {
          return super.getItem(key);
      }

      clearItem(key: string) {
          delete this.storage[key];
          super.clearItem(key);
      }

      clear() {
          this.storage = {};
          super.clear();
      }
  }

  const localStorage = new LocalStorage<string>();

  localStorage.setItem('nico', '30');
  localStorage.setItem('nico', '30');

  interface Position {
      coords: {
          latitude: number;
          longitude: number;
          accuracy: number;
          altitude?: number;
          altitudeAccuracy?: number;
          heading?: number;
          speed?: number;
      };
      timestamp: number;
  }

  interface PositionError {
      code: number;
      message: string;
  }

  interface PositionOptions {
      enableHighAccuracy?: boolean;
      timeout?: number;
      maximumAge?: number;
  }

  type PositionCallback = (position: Position) => void;
  type ErrorCallback = (error: PositionError) => void;

  class GeolocationAPI {
      public getCurrentPosition(success: PositionCallback, error?: ErrorCallback, options?: PositionOptions): void;
      public getCurrentPosition(success: PositionCallback): void {
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(success);
          } else {
              console.log("Geolocation is not supported by this browser.");
          }
      }

      public watchPosition(success: PositionCallback, error?: ErrorCallback, options?: PositionOptions): number {
          if (navigator.geolocation) {
              return navigator.geolocation.watchPosition(success);
          } else {
              console.log("Geolocation is not supported by this browser.");
              null;
          }
      }

      public clearWatch(id: number): void {
          navigator.geolocation.clearWatch(id);
      }
  }

  const geolocation = new GeolocationAPI();

}
