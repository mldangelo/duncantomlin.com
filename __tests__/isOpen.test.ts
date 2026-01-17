import { isOpen, invert } from '@/components/studies/isOpen';

describe('isOpen', () => {
  const RealDate = Date;

  afterEach(() => {
    global.Date = RealDate;
  });

  const mockDate = (isoString: string) => {
    const mockDateInstance = new RealDate(isoString);
    global.Date = class extends RealDate {
      constructor() {
        super();
        return mockDateInstance;
      }
      static now() {
        return mockDateInstance.getTime();
      }
    } as typeof Date;
  };

  it('returns true during business hours on weekday', () => {
    // Wednesday 2pm ET = 7pm UTC
    mockDate('2024-01-17T19:00:00Z');
    expect(isOpen()).toBe(true);
  });

  it('returns false before 9 AM ET on weekday', () => {
    // Wednesday 8am ET = 1pm UTC
    mockDate('2024-01-17T13:00:00Z');
    expect(isOpen()).toBe(false);
  });

  it('returns false after 5 PM ET on weekday', () => {
    // Wednesday 6pm ET = 11pm UTC
    mockDate('2024-01-17T23:00:00Z');
    expect(isOpen()).toBe(false);
  });

  it('returns false on weekend', () => {
    // Saturday 2pm ET = 7pm UTC
    mockDate('2024-01-20T19:00:00Z');
    expect(isOpen()).toBe(false);
  });

  it('invert returns opposite of isOpen', () => {
    mockDate('2024-01-17T19:00:00Z');
    expect(invert()).toBe(!isOpen());
  });
});
