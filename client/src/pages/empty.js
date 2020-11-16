
    <Grid
        container 
        direction="row"
        justify="center"
        alignItems = "center"
        xs = {12}
    >

        <Grid
            container 
            direction="column"
            justify="center"
            alignItems = "center"
            xs = {3}
        >
            <Sidebar2 step={step}/>
        </Grid>
        <Grid
            container 
            direction="column"
            justify="center"
            alignItems = "center"
            xs = {9}
        >

            <Grid
                container 
                direction="row"
                justify="center"
                alignItems = "center"
                xs = {12}
            >

                <Personal 
                    name = {name}
                    gender={gender} 
                    dateOfBirth= {dateOfBirth}
                    broSis = {broSis}
                    impaired = {impaired}
                    impairment = {impairment}
                    primaryLanguage = {primaryLanguage}
                    schoolLanguage = {schoolLanguage}
                    problem = {problem}
                    reason = {reason}
                    improvement ={improvement}
                    awareness={awareness} 
                                />
                             </Grid>

            <Grid
                container 
                direction="row"
                justify="center"
                alignItems = "center"
                xs = {12}
            > 

                <TextField
                    id="perFeedback"
                    onChange = {onChange}
                    label="제언사항"
                    multiline
                    rows={4}
                    variant="outlined"
                    style={{width:"400px"}}
                    value = {perFeedback}
                />
            </Grid>

        <Grid
            container 
            direction="row"
            justify="center"
            alignItems = "center"
            xs = {12}
        >
            <button style={{position:"absolute", top:"75%", left:"40%"}}
            onClick={onClick}>
                Continue
            </button>
        </Grid>

        </Grid>

    </Grid>

