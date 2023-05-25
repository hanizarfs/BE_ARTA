import useDrivePicker from 'react-google-drive-picker'

function App() {
  const [openPicker, authResponse] = useDrivePicker();
  // const customViewsArray = [new google.picker.DocsView()]; // custom view

  const handleOpenPicker = () => {
    openPicker({
      clientId: "82214308072-21se195n066mmtbi5uaqkvdrlhtpqk35.apps.googleusercontent.com",
      developerKey: "AIzaSyC1ph0mlZfgsKEKk28gm3MxzKkw23UT44g",
      viewId: "DOCS",
      token: "ya29.a0AWY7Ckmx6-R7Uc0jiGQKv88LyRL3VtclBceYZyQlS_dZvaE7G5mRaLk2z5aIQ1n7nWJy0P0BhJCDrlbmbTTdA9XSkb4QMJRzNkzgIp3IlNjgDkSjGw60ccQ1QLQq-427ffPWNHSPcITOX4fKOo3hiAQu7dRjaCgYKAcISARMSFQG1tDrp2TmPN3aD7czWPquE-YudRw0163",
      // token: "ya29.a0AWY7CkkqJT4XejYgYmL_RhIuSZC5jxmsWrCGf9ZE-mGVfPxekKcRuhcl8KHkf7SxO4La-aa0MCamBXSIyQQwpXocdlnQ2PUkpAxQDqw7PkUjKeyC6s-RpvLO3II7jz4pdAOXnzdkGct98Tiop6BOV28hmvqdaCgYKAZsSARMSFQG1tDrpyoxJiUFmfc3nK2dV3f-eHg0163",
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      // customViews: customViewsArray, // custom view
      callbackFunction: (data) => {
        if (data.action === 'cancel') {
          console.log('User clicked cancel/close button')
        }
        console.log(data)
      },
    })
  }

  return (
    <div>
      <button onClick={() => handleOpenPicker()}>Open Picker</button>
    </div>
  );
}

export default App;