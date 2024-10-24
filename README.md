# My Answer
Hi, 99.co team.
I am Charles Cahyadi from binus university
This repository contains my submission for the Frontend Engineer (Intern) position at 99 Group.
[CodeSandbox](https://codesandbox.io/p/sandbox/long-sky-sngkgk)

## Questions

### React

1. Hide description until the button is clicked
   Using useState Hook from React to track description is shown or hidden.
   then the button is use to show the description.
   ``` Javascript
      const [descVisible, setDescVisible] = useState(true);
      const toogleVisible = () => {
       setDescVisible((prev) => !prev);
      };
   ```
   
   
3. Because of SEO we want to only hide description after page load
   Using useEffect hook to set 
   
4. Anonymize all phone numbers: first 4 numbers visible, replace following 4 with X (e.g. 8111 XXXX or 8123 XXXX)
   Note Singapore phone number format is always 8 numbers long.
   See [Number Ranges on wikipedia](https://en.wikipedia.org/wiki/Telephone_numbers_in_Singapore#Number_ranges) for precise rules.

5. Line returns (new lines) in the description text should be displayed on page. The text must NOT be all in one line.

6. Clicking on phone number reveals the real number



### Styling

1. Implement the [following design](https://www.figma.com/file/zT67hKBce1jfyZPkx5cGrg/FE-challenge---Project-card-design).
   Note: you will have to register on Figma if you don't already have an account

2. Main pic is too heavy, please suggest ways to reduce its weight.
