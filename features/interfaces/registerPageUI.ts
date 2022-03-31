class RegisterPageUI{
    
    public get header() { return $("//h1"); }
    public get fname() { return $('[name=firstname]') }
    public get lname() { return $('[name=lastname]') }
    public get gender_radio() { return $('[name=sex]') }
    public get experience_radio() { return $('[name=exp]') }
    public get favchai_checkbox() { return $('input[name*=Tea]') }
    public get whychai_checkbox() { return $('[name=tool]') }
    public get continent_dropdown() { return $('#continents') }
    public get selCommands_multiselect() { return $('#selenium_commands') }
    public get submit_btn() { return $('#submit') }
}

export default new RegisterPageUI();