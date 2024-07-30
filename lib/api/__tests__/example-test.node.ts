import { createTestObj, TestType } from "../apiExample";

const testObj: TestType = {
  value: 'Test object 1',
}

describe('Test object APIs', () => {
  beforeAll(async () => {
    // NOTHING TO DO
  });

  afterAll(async () => {
    // NOTHING TO DO
  })

  test('Test createTestObj success', async () => {
    const success = await createTestObj(testObj);

    expect(success).toBe(true);
  });
});