import { useEffect } from 'react';
import './App.css';
import { installViewer } from '@ohif/viewer';

function App() {
  const config = {
    whiteLabeling: {
      /* Optional: Should return a React component to be rendered in the "Logo" section of the application's Top Navigation bar */
      createLogoComponentFn: function (React) {
        return React.createElement('div', {
          target: '_self',
          rel: 'noopener noreferrer',
          className: 'header-brand',
          href: '/',
          style: {
            display: 'block',
            background: 'url(/alem-health.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            width: '200px',
          },
        }, React.createElement('h5', { className: 'viewer-title' }, 'AlemHealth'),);
      },
    },
    servers: {
      dicomWeb: [
        {
          name: 'DCM4CHEE',
          wadoUriRoot: 'https://dev-patient-viewer-server-06.aws.cloud.alem.health/dcm4chee-arc/aets/DCM4CHEE/wado',
          qidoRoot: 'https://dev-patient-viewer-server-06.aws.cloud.alem.health/dcm4chee-arc/aets/DCM4CHEE/rs',
          wadoRoot: 'https://dev-patient-viewer-server-06.aws.cloud.alem.health/dcm4chee-arc/aets/DCM4CHEE/rs',
          qidoSupportsIncludeField: true,
          imageRendering: 'wadors',
          thumbnailRendering: 'wadors',
        }
      ]
    },
    hotkeys: [
      {
        commandName: 'incrementActiveViewport',
        label: 'Next Viewport',
        keys: ['right'],
      },
      {
        commandName: 'decrementActiveViewport',
        label: 'Previous Viewport',
        keys: ['left'],
      },
      { commandName: 'rotateViewportCW', label: 'Rotate Right', keys: ['r'] },
      { commandName: 'rotateViewportCCW', label: 'Rotate Left', keys: ['l'] },
      { commandName: 'invertViewport', label: 'Invert', keys: ['i'] },
      {
        commandName: 'flipViewportVertical',
        label: 'Flip Horizontally',
        keys: ['h'],
      },
      {
        commandName: 'flipViewportHorizontal',
        label: 'Flip Vertically',
        keys: ['v'],
      },
      { commandName: 'scaleUpViewport', label: 'Zoom In', keys: ['+'] },
      { commandName: 'scaleDownViewport', label: 'Zoom Out', keys: ['-'] },
      { commandName: 'fitViewportToWindow', label: 'Zoom to Fit', keys: ['='] },
      { commandName: 'resetViewport', label: 'Reset', keys: ['space'] },
      { commandName: 'nextImage', label: 'Next Image', keys: ['down'] },
      { commandName: 'previousImage', label: 'Previous Image', keys: ['up'] },
      {
        commandName: 'previousViewportDisplaySet',
        label: 'Previous Series',
        keys: ['pagedown'],
      },
      {
        commandName: 'nextViewportDisplaySet',
        label: 'Next Series',
        keys: ['pageup'],
      },
      { commandName: 'setZoomTool', label: 'Zoom', keys: ['z'] },
      {
        commandName: 'windowLevelPreset1',
        label: 'W/L Preset 1',
        keys: ['1'],
      },
      {
        commandName: 'windowLevelPreset2',
        label: 'W/L Preset 2',
        keys: ['2'],
      },
      {
        commandName: 'windowLevelPreset3',
        label: 'W/L Preset 3',
        keys: ['3'],
      },
      {
        commandName: 'windowLevelPreset4',
        label: 'W/L Preset 4',
        keys: ['4'],
      },
      {
        commandName: 'windowLevelPreset5',
        label: 'W/L Preset 5',
        keys: ['5'],
      },
      {
        commandName: 'windowLevelPreset6',
        label: 'W/L Preset 6',
        keys: ['6'],
      },
      {
        commandName: 'windowLevelPreset7',
        label: 'W/L Preset 7',
        keys: ['7'],
      },
      {
        commandName: 'windowLevelPreset8',
        label: 'W/L Preset 8',
        keys: ['8'],
      },
      {
        commandName: 'windowLevelPreset9',
        label: 'W/L Preset 9',
        keys: ['9'],
      },
    ],
    cornerstoneExtensionConfig: {
      hideHandles: true,
    },
  }
  useEffect(() => {
    installViewer(config)
  }, []);

  return (
    <div className="App">
      test
    </div>
  );
}

export default App;
