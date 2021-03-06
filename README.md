# Angular Stereo Builder
##### by Daniel Brad


# Description

Angular Stereo Builder is a web application built with a Rails back end and Angular front end that allows a user to assemble a stereo profile from an existing library of components or components that they create themselves. It also incorporates Devise and angular-devise to allow user registration and comments.


# Installation

To install:

First, fork and clone this repo.

Then from your terminal, enter:
```bash
bundle install
```

Then enter:
```bash
npm install
```

Then:
```bash
rake db:migrate
```

If you want a small library of stereo components to start with, then also enter in:
```bash
rake db:seed
```

# Usage

You may view any existing stereo profiles as a guest, but to create, edit or comment on a stereo profile, you must register an account.


# license

Copyright (c) 2016 Daniel Brad

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
