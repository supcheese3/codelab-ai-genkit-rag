/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { configureGenkit } from '@genkit-ai/core';
import { dotprompt } from '@genkit-ai/dotprompt';
import { firebase } from '@genkit-ai/firebase';
import { vertexAI } from '@genkit-ai/vertexai';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASLsJ7B9bO3TRR0zAnpQP_JfR8R_AxbXY",
  authDomain: "practicing-gen-ai.firebaseapp.com",
  projectId: "practicing-gen-ai",
  storageBucket: "practicing-gen-ai.appspot.com",
  messagingSenderId: "585534748742",
  appId: "1:585534748742:web:601b859e7354bffdf3f247",
  measurementId: "G-MW76L4882V"
};

export const getProjectId = () => {
  return firebaseConfig.projectId;
};

export const config = configureGenkit({
  plugins: [
    firebase({
      projectId: getProjectId(),
      traceStore: { collection: 'traceStore' },
      flowStateStore: { collection: 'flowTraceStore' },
    }),
    vertexAI({
      projectId: getProjectId(),
      location: 'us-central1',
    }),
    dotprompt(),
  ],
  flowStateStore: 'firebase',
  traceStore: 'firebase',
  enableTracingAndMetrics: true,
  logLevel: 'debug',
  // promptDir: join(process.cwd(), 'public', 'prompts'), -- not working
});
