﻿using Google.Apis.Util.Store;

namespace AutoVideoMetaLocalize.Utilities {
	public static class GoogleDataStores {
		public static IDataStore GOOGLE_AUTH_TOKEN_STORE = new FileDataStore(nameof(GOOGLE_AUTH_TOKEN_STORE));
	}
}
