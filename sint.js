function resample(project, delta2) {
  const interpolate = require('interpolate');
  const downsample = require('downsample');

  const projectData = project.data;
  const sampleRate = 1 / delta2;

  const interpolatedData = interpolate(projectData, sampleRate);
  const resampledData = downsample(interpolatedData, delta2);

  return resampledData;
}
