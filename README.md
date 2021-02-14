#### Bandpass Filter Javascript

##### Outline
- Basic bandpass filter.  Takes min and max frequencies and an array of frequencies
- E.g. Input(100,5000,[50,150,260,500,100,8000,9000,15000])
- Output = [100, 100, 150, 260, 500, 5000, 5000, 5000]

##### Edge cases
- Throw error when no frequencies given
- Non integers given as input should throw error saying sound wave parsed incorrectly
- Input min and max not specified then default Min = 40 and Max = 1000

##### Tech
- Javascript
- Jest
