import compiler from './complier';

test('Inserts name and outputs JavaScript', async () => {
  const stats = await compiler('example.txt');
  // console.log(stats);
  
  const output = stats.toJson().modules[0].source;
  // console.log(output);
  
  expect(output).toBe(`export default "Hello Alice!\\n"`);
});