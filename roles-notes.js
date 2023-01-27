[{"content":"## Welcome to RTLBook\n\nThis is an interactive coding environment where you can explore the following libraries:\n\n| Name      | Docs |\n| ----------- | ----------- |\n| React      | [docs](https://reactjs.org/)       |\n| @testing-library/react   |  [docs](https://testing-library.com/docs/react-testing-library/intro/)        |\n| @testing-library/user-event |   [docs](https://testing-library.com/docs/user-event/intro)  |\n| @testing-library/react-hooks |  [docs](https://github.com/testing-library/react-hooks-testing-library)  |\n| @testing-library/jest-dom | [docs](https://github.com/testing-library/jest-dom#custom-matchers) |\n| expect |  [docs](https://jestjs.io/docs/expect)  |\n\nIn between each 'cell' there are buttons that can add in a new code editor or a text section.","type":"text","id":"12frm"},{"content":"import React, { useState } from 'react';\nimport { render, screen } from '@testing-library/react';\nimport user from '@testing-library/user-event';\n\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount((c) => c + 1)}>\n    Count: {count}\n  </button>\n};\nrender(<Counter />);","type":"code","id":"az9bh"},{"content":"test('it shows a button', () => {\n  render(<Counter />);\n\n  const button = screen.getByRole('button');\n\n  expect(\n    button\n  ).toBeInTheDocument();\n});\n","type":"code","id":"ngyzj"},{"content":"test('it doesnt show an input', () => {\n  render(<Counter />);\n\n  const input = screen.queryByRole('textbox');\n  \n  expect(\n    input\n  ).not.toBeInTheDocument();\n});\n","type":"code","id":"hgs1s"},{"content":"import { render, screen } from '@testing-library/react';\n\nfunction RoleExample() {\n  return (\n    <div>\n      <a href='/'>Link</a>\n      <button>Button</button>\n      <footer>ContentInfo</footer>\n      <h1>Heading</h1>\n      <header>Banner</header>\n      <img alt='description' /> Img\n      <input type='checkbox' /> Checkbox\n      <input type='number' /> Spinbutton\n      <input type='radio' /> Radio\n      <input type='text' /> Textbox\n      <li>Listitem</li>\n      <ul>Listgroup</ul>\n    </div>\n  )\n}\n\nrender(<RoleExample />)","type":"code","id":"shrdr"},{"content":"test('check all the render elements', () => {\n  render(<RoleExample />)\nconst roles = [\n  'link',\n  'button',\n  'contentinfo',\n  'heading',\n  'banner',\n  'img',\n  'checkbox',\n  'spinbutton',\n  'radio',\n  'textbox',\n  'listitem',\n  'list'\n];\nfor(let role of roles) {\n  const el = screen.getByRole(role);\n  expect(el).toBeInTheDocument();\n}\n})","type":"code","id":"3fll7"},{"content":"import { render, screen } from '@testing-library/react';\n\nfunction AccessibleNames() {\n  return (\n    <div>\n      <button>Submit</button>\n      <button>Cancel</button>\n    </div>\n  )\n};\n\nrender(<AccessibleNames />)","type":"code","id":"dxm0k"},{"content":"test('access 2 same elements', () => {\n  render(<AccessibleNames />);\n  const submit = screen.getByRole('button', {\n    name: /submit/i\n  })\n  const cancel = screen.getByRole('button', {\n    name: /cancel/i\n  })\n\n  expect(submit).toBeInTheDocument();\n  expect(cancel).toBeInTheDocument();\n})","type":"code","id":"hywn7"},{"content":"import { render } from '@testing-library/react';\nfunction MoreNames() {\n  return(\n    <div>\n      <label htmlFor=\"name\">Name</label>\n      <input id='name' />\n      <label htmlFor='email'>Email</label>\n      <input id='email' />\n    </div>\n  )\n}\n\nrender(<MoreNames />)","type":"code","id":"ytc0m"},{"content":"test('test 2 input fields', () => {\n  render(<MoreNames />);\n\n  const name = screen.getByRole('textbox', {\n    name: /name/i\n  })\n  const email = screen.getByRole('textbox', {\n    name: /email/i\n  })\n\n  expect(name).toBeInTheDocument();\n  expect(email).toBeInTheDocument();\n})","type":"code","id":"eclyb"},{"content":"function IconButton() {\n  return (\n    <div>\n      <button aria-label='signIn'>\n        <svg />\n      </button>\n      <button aria-label='signOut'>\n        <svg />\n      </button>\n    </div>\n  )\n}\n\nrender(<IconButton />)","type":"code","id":"ir11b"},{"content":"test('icon', () => {\n  render(<IconButton />);\n\n  const signIn = screen.getByRole('button', {\n    name: /signin/i\n  })\n  const signOut = screen.getByRole('button', {\n    name: /signout/i\n  })\n\n  expect(signIn).toBeInTheDocument();\n  expect(signOut).toBeInTheDocument();\n})","type":"code","id":"c00qf"},{"content":"import { render } from '@testing-library/react';\n\nfunction ColorList() {\n  return(\n    <ul>\n      <li>Green</li>\n      <li>Blue</li>\n      <li>Red</li>\n    </ul>\n  )\n}\n\nrender(<ColorList />)","type":"code","id":"ce3ui"},{"content":"test('getBy, queryBy, findBy', async () => {\n  render(<ColorList />);\n  expect(() => screen.getByRole('textbox')).toThrow();\n  expect(screen.queryByRole('textbox')).toEqual(null);\n  let errorWhileFindBy = false;\n  try{\n    await screen.findByRole('textbox');\n  }catch(error){\n    errorWhileFindBy = true;\n  }\n\n  expect(errorWhileFindBy).toEqual(true);\n})","type":"code","id":"pkurz"}]