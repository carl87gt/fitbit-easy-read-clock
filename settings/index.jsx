function SettingsPage(props) {
    return (
        <Page>
            <Section title={<Text bold align="center">Date Settings</Text>}>
                <Toggle settingsKey="displaySeconds" label="Display Seconds"/>
            </Section>
            <Section title={<Text bold align="center">Date Color</Text>}>
                <ColorSelect
                    settingsKey="timeLabel_color"
                    colors={[
                        {color: 'white'},
                        {color: "aquamarine"},
                        {color: "aqua"},
                        {color: "deepskyblue"},
                        {color: "#f00"},
                        {color: "gold"},
                        {color: "thistle"},
                        {color: "plum"},
                        {color: "hotpink"},
                        {color: "magenta"},
                        {color: "lightsalmon"},
                        {color: 'sandybrown'},
                        {color: "lightcoral"},
                        {color: "coral"},
                        {color: 'tomato'},
                        {color: "indianred"},
                        {color: "#0f0"}
                    ]}
                />
            </Section>
            <Section title={<Text bold align="center">Month Color</Text>}>
                <ColorSelect
                    settingsKey="monthLabel_color"
                    colors={[
                        {color: 'white'},
                        {color: "aquamarine"},
                        {color: "aqua"},
                        {color: "deepskyblue"},
                        {color: "#f00"},
                        {color: "gold"},
                        {color: "thistle"},
                        {color: "plum"},
                        {color: "hotpink"},
                        {color: "magenta"},
                        {color: "lightsalmon"},
                        {color: 'sandybrown'},
                        {color: "lightcoral"},
                        {color: "coral"},
                        {color: 'tomato'},
                        {color: "indianred"},
                        {color: "#0f0"}
                    ]}
                />
            </Section>
            <Section title={<Text bold align="center">Day Color</Text>}>
                <ColorSelect
                    settingsKey="dayLabel_color"
                    colors={[
                        {color: 'white'},
                        {color: "aquamarine"},
                        {color: "aqua"},
                        {color: "deepskyblue"},
                        {color: "#f00"},
                        {color: "gold"},
                        {color: "thistle"},
                        {color: "plum"},
                        {color: "hotpink"},
                        {color: "magenta"},
                        {color: "lightsalmon"},
                        {color: 'sandybrown'},
                        {color: "lightcoral"},
                        {color: "coral"},
                        {color: 'tomato'},
                        {color: "indianred"},
                        {color: "#0f0"}
                    ]}
                />
            </Section>
            <Section title={<Text bold align="center">Heart Rate Color</Text>}>
                <ColorSelect
                    settingsKey="heartRateLabel_color"
                    colors={[
                        {color: 'white'},
                        {color: "aquamarine"},
                        {color: "aqua"},
                        {color: "deepskyblue"},
                        {color: "#f00"},
                        {color: "gold"},
                        {color: "thistle"},
                        {color: "plum"},
                        {color: "hotpink"},
                        {color: "magenta"},
                        {color: "lightsalmon"},
                        {color: 'sandybrown'},
                        {color: "lightcoral"},
                        {color: "coral"},
                        {color: 'tomato'},
                        {color: "indianred"},
                        {color: "#0f0"}
                    ]}
                />
            </Section>
            <Section title={<Text bold align="center">Calories Color</Text>}>
                <ColorSelect
                    settingsKey="caloriesLabel_color"
                    colors={[
                        {color: 'white'},
                        {color: "aquamarine"},
                        {color: "aqua"},
                        {color: "deepskyblue"},
                        {color: "#f00"},
                        {color: "gold"},
                        {color: "thistle"},
                        {color: "plum"},
                        {color: "hotpink"},
                        {color: "magenta"},
                        {color: "lightsalmon"},
                        {color: 'sandybrown'},
                        {color: "lightcoral"},
                        {color: "coral"},
                        {color: 'tomato'},
                        {color: "indianred"},
                        {color: "#0f0"}
                    ]}
                />
            </Section>
            <Section title={<Text bold align="center">Steps Color</Text>}>
                <ColorSelect
                    settingsKey="stepsLabel_color"
                    colors={[
                        {color: 'white'},
                        {color: "aquamarine"},
                        {color: "aqua"},
                        {color: "deepskyblue"},
                        {color: "#f00"},
                        {color: "gold"},
                        {color: "thistle"},
                        {color: "plum"},
                        {color: "hotpink"},
                        {color: "magenta"},
                        {color: "lightsalmon"},
                        {color: 'sandybrown'},
                        {color: "lightcoral"},
                        {color: "coral"},
                        {color: 'tomato'},
                        {color: "indianred"},
                        {color: "#0f0"}
                    ]}
                />
            </Section>
        </Page>
    );
}

registerSettingsPage(SettingsPage);
