function renderLyrics() {
    // Obtener los valores de los inputs
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const input3 = document.getElementById('input3').value;
    const input4 = document.getElementById('input4').value;
    const input5 = document.getElementById('input5').value;
    const input6 = document.getElementById('input6').value;
    const input7 = document.getElementById('input7').value;
    const input8 = document.getElementById('input8').value;
    const input9 = document.getElementById('input9').value;
    const input10 = document.getElementById('input10').value;
    const input11 = document.getElementById('input11').value;
    const input12 = document.getElementById('input12').value;
    const input13 = document.getElementById('input13').value;

    // Crear la letra completa
    const completeLyrics = `
            <p>
                Something's in the-
            </P>
            <p>
                Something's in the air right now <br>
                Like I'm <b>${input1}</b> track of time <br>
                Like I don't really care right now, but maybe that's fine <br>
                You <b>${input2}</b>  even there that day <br>
                I was waitin' on you <br>
                I wondered if you aware that day was the last straw for me and I know <br>
            </p>
            <p>
                I sent you flowers <br>
                <b>${input3}</b>  you even care? <br>
                You ran the shower and left them by the stairs <br>
                Ooh-ooh-ooh, ooh, ooh <br>
                Ay-ay-ay-ay, ay, ay <br>
            </p>
            <p>
                Thought you had your shit <b>${input4}</b> , but damn, I was wrong <br>
                You ain't nothin' but a lost cause <br>
                And this <b>${input5}</b>  nothin' like it once was <br>
                I know you think you're such an outlaw <br>
                But you got no job <br> 
                You ain't nothin' but a lost cause <br>
                And this ain't nothin' like it oncе was <br>
                I know you think you're such an outlaw <br>
                But you got no job <br>
            </p>
            <p>
                I <b>${input6}</b>  to think you were shy <br>
                But maybe you just had nothing on your mind <br>
                Maybe you were thinkin' 'bout <b>${input7}</b>  all the time <br>
                I used to wish you were mine <br> 
                But that was way before I realized <br> 
                Someone like you <b>${input8}</b>  always be so easy to find <br> 
                So easy (so easy) <br>
                He-hee, mm-mm-mm, mm <br> 
            </p>
            <p>
                Gave me no <b>${input9}</b>  <br>  
                Wish I didn't care <br>
                <b>${input10}</b>  been gone for hours <br>
                Could be anywhere <br>
                Ooh, ooh-ooh, ooh-ooh <br> 
                Ah-ah-ah-ah-ah <br>
            </p>
            <p>
                Thought you would've grown eventually, but you <b>${input11}</b>  me wrong <br> 
                You ain't nothing but a lost cause <br>
                And this ain't nothing like it once was <br>
                I know you think you're such an outlaw (yeah) <br> 
                But you got no job <br>
                You ain't nothing but a lost cause <br>
                And this ain't <b>${input12}</b>  like it once was <br>
                I know you think you're such an outlaw (think you're such an outlaw) <br>
                But you got no job <br>
            </p>
            <p>
                What <b>${input13}</b>  I tell you? <br>
                Don't get complacent <br>
                It's time to face it now, na-na, na-na, na-na <br>
                What did I tell you? <br>
                Don't get complacent <br>
                It's time to face it now, na-na-na <br>
            </p>
    `;

    // Renderizar la letra completa en el div con id "completeLyrics"
    const completeLyricsSection = document.getElementById('completeLyrics');
    completeLyricsSection.innerHTML = completeLyrics;
    completeLyricsSection.style.display = 'block';
}
