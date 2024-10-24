# My Answer
Hi, 99.co team.
I am Charles Cahyadi from binus university
This repository contains my submission for the Frontend Engineer (Intern) position at 99 Group.
[CodeSandbox](https://codesandbox.io/p/sandbox/long-sky-sngkgk)

## Questions

### React

1. Hide description until the button is clicked
   <br>Using useState Hook from React to track description is shown or hidden.
   then the button is use to show the description.
   ``` Javascript
      const [descVisible, setDescVisible] = useState(true);
      const toogleVisible = () => {
       setDescVisible((prev) => !prev);
      };
   ```
   
2. Because of SEO we want to only hide description after page load
   Using useEffect hook to set [descVisible] to false, and add '[]' so runs the effect only once after the initial render.
   ```Javascript
      useEffect(() => {
       setDescVisible(false);
     }, []);
   ```
   
3. Anonymize all phone numbers: first 4 numbers visible, replace following 4 with X (e.g. 8111 XXXX or 8123 XXXX)
   Note Singapore phone number format is always 8 numbers long.
   See [Number Ranges on wikipedia](https://en.wikipedia.org/wiki/Telephone_numbers_in_Singapore#Number_ranges) for precise rules.
   Using regex to check the string, and if it`s a match then replace 4 last digit with XXXX
   ```Javascript
      const regex =/\b(3\d{3}\s*\d{4}|6\d{3}\s*\d{4}|8\d{3}\s*\d{4}|9[0-8]\d{2}\s*\d{4})\b/g;
      {text.split(regex).map((num, i) =>
                  regex.test(num) ? (
                    <span className="number" key={i} onClick={toogleNumVisible}>
                      {numVisible ? num : num.slice(0, num.length - 4) + "XXXX"}
                    </span>
                  ) : (
                    num
                  )
                )}
   ```

4. Line returns (new lines) in the description text should be displayed on page. The text must NOT be all in one line.
   plits it into an array using the newline character ("\n"), and then maps over that array to create a new paragraph ("p") tag element for each line. This ensures that each line of the description is rendered on a newline in the output.
   ```javaScript
      {descVisible &&
            props.description.split("\n").map((text, idx) => (
              <p key={idx}>
                {text.split(regex).map((num, i) =>
                  regex.test(num) ? (
                    <span className="number" key={i} onClick={toogleNumVisible}>
                      {numVisible ? num : num.slice(0, num.length - 4) + "XXXX"}
                    </span>
                  ) : (
                    num
                  )
                )}
              </p>
            ))}
   ```
   
5. Clicking on phone number reveals the real number
   Using the useState hook from React to track whether a number is revealed or not.
   then clicking it reveals the real number
   ```javascript
      const [numVisible, setNumVisible] = useState(false);
      const toogleNumVisible = () => {
       setNumVisible((numVisible) => !numVisible);
     };
   ```


### Styling

1. Implement the [following design](https://www.figma.com/file/zT67hKBce1jfyZPkx5cGrg/FE-challenge---Project-card-design).
   Note: you will have to register on Figma if you don't already have an account

2. Main pic is too heavy, please suggest ways to reduce its weight.
